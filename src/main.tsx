import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

interface Division {
  readonly title: string;
  readonly code: string;
  readonly lead: string;
  readonly body: string;
  readonly list: readonly string[];
}

interface DocumentItem {
  readonly code: string;
  readonly name: string;
  readonly type: string;
  readonly text: string;
}

const divisions: readonly Division[] = [
  {
    title: "Community Operations",
    code: "SB 01",
    lead: "A permanent address for an impermanent internet.",
    body: "We maintain the shared space where conversation, recurring characters, and collective habits become something recognizable. Community Operations keeps participation at the center of the enterprise.",
    list: [
      "Member participation",
      "Community standards",
      "Inter-team coordination",
    ],
  },
  {
    title: "Media & Distribution",
    code: "SB 02",
    lead: "Material worth circulating.",
    body: "We support the production, selection, and circulation of community media. Our focus is continuity of references and the careful management of content that has escaped its original context.",
    list: ["Media circulation", "Community identity", "Reference retention"],
  },
  {
    title: "Interactive Environments",
    code: "SB 03",
    lead: "Shared spaces beyond the conversation.",
    body: "Our environments bring the community together through play, events, and collaborative projects. We organize for participation rather than audience size.",
    list: ["Game environments", "Community events", "Collaborative projects"],
  },
];

const docs: readonly DocumentItem[] = [
  {
    code: "SB-001",
    name: "The Swagballs Mandate",
    type: "Company statement",
    text: "Swagballs Incorporated represents 69SwagBalls420 as a continuing institution. Our mandate is to maintain a distinct place on the internet, support the people who make it recognizable, and give the community room to evolve without losing its identity. Our product is the shared environment. Our measure is whether people return.",
  },
  {
    code: "SB-002",
    name: "Participation as Operating Model",
    type: "Operating guidance",
    text: "The community is sustained by contribution, not passive reach. Conversation, media, events, and shared projects all belong to one operating model. Every division should make participation easier and preserve room for independent initiative. Activity alone is not a substitute for a place people want to inhabit.",
  },
  {
    code: "SB-003",
    name: "Use of the Swagballs Name",
    type: "Brand memorandum",
    text: "Swagballs Incorporated is the corporate identity of this presentation. The community remains 69SwagBalls420. Use the full company name in formal materials and the server name when referring to the community. A consistent identity does not require a consistent opinion.",
  },
];

function App(): React.JSX.Element {
  const [unit, setUnit] = useState<number>(0);
  const [doc, setDoc] = useState<number>(-1);
  const [simple, _setSimple] = useState<boolean>(false);

  function handleTabsKeyDown(
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ): void {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();

    const nextIndex =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? divisions.length - 1
          : (index + (e.key === "ArrowRight" ? 1 : divisions.length - 1)) %
            divisions.length;

    setUnit(nextIndex);
    document.getElementById(`unit-${nextIndex}`)?.focus();
  }

  const activeDivision = divisions[unit];

  return (
    <div className={simple ? "site simple" : "site"}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="utility">
        <span>SWAGBALLS GROUP / CORPORATE INFORMATION SERVICES</span>
      </div>
      <div className="page">
        <header>
          <a className="brand" href="#">
            <span className="mark">SB</span>
            <span>
              <strong>SWAGBALLS</strong>
              <small>I N C O R P O R A T E D</small>
            </span>
          </a>
          <div className="corp">
            CORPORATE PORTAL
            <br />
            <b>69SwagBalls420</b>
          </div>
        </header>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#company">Company overview</a>
          <a href="#divisions">Our divisions</a>
          <a href="#documents">Publications</a>
          <a href="#access">Contact &amp; careers</a>
        </nav>
        <div className="crumb">
          Swagballs Incorporated / Corporate / Overview{" "}
          <span>Document class: External</span>
        </div>
        <div className="layout">
          <aside>
            <div className="sidehead">Corporate directory</div>
            <nav className="sidenav">
              <a className="active" href="#company">
                Company overview
              </a>
              <a href="#mandate">Corporate mandate</a>
              <a href="#divisions">Operating divisions</a>
              <a href="#documents">Document register</a>
              <a href="#access">Careers</a>
            </nav>
            <section className="asset">
              <b>PRINCIPAL ASSET</b>
              <h2>69SwagBalls420</h2>
              <p>
                A shared environment.
                <br />
                An independent identity.
                <br />
                An ongoing concern.
              </p>
              <a
                href="https://discord.gg/uWcE7wqDbZ"
                target="_blank"
                rel="noreferrer"
              >
                Join our team
              </a>
            </section>
            <section className="record">
              <b>RECORD OF BUSINESS</b>
              <dl>
                <dt>Entity</dt>
                <dd>Swagballs, Inc.</dd>
                <dt>Sector</dt>
                <dd>Information Services</dd>
                <dt>Region</dt>
                <dd>North America & Europe</dd>
                <dt>Scope</dt>
                <dd>Internet</dd>
              </dl>
            </section>
          </aside>
          <main id="main">
            <section className="hero" id="company">
              <div className="hero-bar">
                SWAGBALLS INCORPORATED <span>COMPANY OVERVIEW / 01</span>
              </div>
              <div className="hero-grid">
                <span className="eyebrow">An institution of the internet.</span>
                <h1>
                  Continuity.
                  <br />
                  Presence.
                  <br />
                  <em>Swag.</em>
                </h1>
                <div className="hero-copy">
                  <p>
                    We bring structure to a community that has never required an
                    explanation.
                  </p>
                  <p>
                    Swagballs Incorporated represents 69SwagBalls420 across
                    community operations, media, and shared digital
                    environments.
                  </p>
                  <a className="button" href="#divisions">
                    Explore our operations
                  </a>
                </div>
              </div>
              <div className="hero-foot">
                COMMUNITY IS OUR BUSINESS.<span>SB 69 / 420</span>
              </div>
            </section>
            <section className="mandate" id="mandate">
              <label>01 / CORPORATE MANDATE</label>
              <h2>Built around the people who keep showing up.</h2>
              <p>
                Our business is the maintenance of a place: its conversations,
                its culture, and its capacity to continue. We value durable
                participation over temporary visibility. We invest in the
                conditions that allow a community to remain itself.
              </p>
              <div className="principles">
                <div>
                  <b>01</b>
                  <strong>Maintain presence</strong>
                  <span>A place people return to.</span>
                </div>
                <div>
                  <b>02</b>
                  <strong>Preserve identity</strong>
                  <span>A voice that remains ours.</span>
                </div>
                <div>
                  <b>03</b>
                  <strong>Support continuity</strong>
                  <span>Room for what comes next.</span>
                </div>
              </div>
            </section>
            <section id="divisions">
              <div className="sectionhead">
                <div>
                  <label>02 / OPERATING STRUCTURE</label>
                  <h2>Our divisions</h2>
                </div>
                <small>3 OPERATING UNITS</small>
              </div>
              <div
                className="tabs"
                role="tablist"
                aria-label="Operating divisions"
              >
                {divisions.map((d, i) => (
                  <button
                    type="button"
                    id={`unit-${i}`}
                    role="tab"
                    aria-selected={unit === i}
                    aria-controls="unit-panel"
                    tabIndex={unit === i ? 0 : -1}
                    key={d.code}
                    onClick={() => setUnit(i)}
                    onKeyDown={(e) => handleTabsKeyDown(e, i)}
                  >
                    <small>{d.code}</small>
                    {d.title}
                  </button>
                ))}
              </div>
              {activeDivision && (
                <div
                  className="unit-panel"
                  id="unit-panel"
                  role="tabpanel"
                  aria-labelledby={`unit-${unit}`}
                  tabIndex={0}
                >
                  <b>0{unit + 1}</b>
                  <div>
                    <h3>{activeDivision.lead}</h3>
                    <p>{activeDivision.body}</p>
                    <ul>
                      {activeDivision.list.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>
            <section id="documents" className="documents">
              <div className="sectionhead">
                <div>
                  <label>03 / DOCUMENT REGISTER</label>
                  <h2>Corporate publications</h2>
                </div>
                <small>ISSUED BY GROUP OFFICE</small>
              </div>
              {docs.map((d, i) => (
                <article className="doc" key={d.code}>
                  <button
                    type="button"
                    aria-expanded={doc === i}
                    aria-controls={`doc-${i}`}
                    onClick={() => setDoc((prev) => (prev === i ? -1 : i))}
                  >
                    <span>{d.code}</span>
                    <strong>
                      {d.name}
                      <small>{d.type}</small>
                    </strong>
                    <b>{doc === i ? "Close" : "Read"}</b>
                  </button>
                  <div id={`doc-${i}`} hidden={doc !== i} className="docbody">
                    <small>SWAGBALLS INCORPORATED / MINISTRY OF TRUTH</small>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <small>End of document.</small>
                  </div>
                </article>
              ))}
            </section>
            <section id="access" className="access">
              <div>
                <label>04 / CONTACT &amp; CAREERS</label>
                <h2>
                  The company is here.
                  <br />
                  The community awaits.
                </h2>
                <p>
                  For participation, conversation, and community matters, enter
                  69SwagBalls420.
                </p>
              </div>
              <a
                className="button"
                href="https://discord.gg/uWcE7wqDbZ"
                target="_blank"
                rel="noreferrer"
              >
                Join our team
              </a>
            </section>
          </main>
          <aside className="right">
            <section className="statement">
              <div className="paneltitle">From the Ministry of Truth</div>
              <div>
                <label>STATEMENT OF PURPOSE</label>
                <h2>
                  Presence is
                  <br />
                  an asset.
                </h2>
                <p>
                  A community cannot be manufactured after the fact. It has to
                  be maintained, day after day, by the people inside it.
                </p>
                <a href="#mandate">Read our mandate</a>
                <small>
                  SWAGBALLS INCORPORATED
                  <br />
                  Ministry of Truth
                </small>
              </div>
            </section>
            <section className="notices">
              <div className="paneltitle">Corporate notices</div>
              <article>
                <label>COMMUNITY OPERATIONS</label>
                <h3>Direct hiring</h3>
                <p>
                  Job applications take place through our online environment.
                </p>
                <a href="#access">Career information</a>
              </article>
              <article>
                <label>MINISTRY OF TRUTH</label>
                <h3>Identity memorandum</h3>
                <p>One community. A consolidated corporate presentation.</p>
                <a href="#documents" onClick={() => setDoc(2)}>
                  View memorandum SB-069
                </a>
              </article>
            </section>
            <div className="seal">
              <b>SB</b>
              <strong>
                SWAGBALLS
                <br />
                INCORPORATED
              </strong>
              <small>CONTINUITY THROUGH PRESENCE</small>
            </div>
          </aside>
        </div>
        <footer>
          <div>
            <strong>SWAGBALLS INCORPORATED</strong>
            <span>Community. Media. Environments.</span>
          </div>
          <a href="#">Return to top</a>
          <p>Your friendly neighbor.</p>
        </footer>
      </div>
      <div className="status">
        <span>Swagballs Information Services</span>
        <span>Corporate Portal</span>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element with id 'root'");
}

createRoot(rootElement).render(<App />);
