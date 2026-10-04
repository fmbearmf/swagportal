import PostalMime from "postal-mime";

export interface Env {
  DISCORD_WEBHOOK_URL: string;
}

export default {
  async email(
    message: ForwardableEmailMessage,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<void> {
    try {
      if (!env.DISCORD_WEBHOOK_URL) {
        throw new Error("missing DISCORD_WEBHOOK_URL");
      }

      const rawEmail = await new Response(message.raw).arrayBuffer();

      const parser = new PostalMime();
      const parsedEmail = await parser.parse(rawEmail);

      const senderName = parsedEmail.from?.name
        ? `${parsedEmail.from.name} `
        : "";
      const senderAddress = parsedEmail.from?.address || message.from;
      const subject = parsedEmail.subject || "(No Subject)";

      const body = parsedEmail.text || "(Empty or non-text email)";
      const truncatedBody =
        body.length > 3900 ? `${body.slice(0, 3900)}\n\n... (truncated)` : body;

      const payload = {
        username: "swag.giving mailbot",
        avatar_url: "https://cloudflare.com/favicon.ico",
        embeds: [
          {
            title: subject.slice(0, 256),
            color: 0x5865f2,
            author: {
              name: `${senderName} <${senderAddress}>`.slice(0, 256),
            },
            description: truncatedBody,
            fields: [
              {
                name: "Recipient",
                value: message.to,
                inline: true,
              },
            ],
            footer: {
              text: `Message ID: ${message.headers.get("message-id") || "N/A"}`,
            },
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const response = await fetch(env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `Discord rejected webhook: ${response.status} - ${errorText}`,
        );
      }
    } catch (err) {
      console.error("failed to process email:", err);
    }
  },
};
