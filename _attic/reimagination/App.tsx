import { RecordProvider } from "./record/RecordContext";
import { LoupeBar, Chip } from "./loupe/Loupe";
import { Inspectable } from "./loupe/Inspectable";
import { testimonies } from "./content/testimonies";
import { Masthead } from "./components/Masthead";
import { FieldNotes } from "./components/FieldNotes";
import { CaseFiles } from "./components/CaseFiles";
import { Experience } from "./components/Experience";
import { FieldIndex } from "./components/FieldIndex";
import { Archive } from "./components/Archive";
import { Voices } from "./components/Voices";
import { Contact } from "./components/Contact";
import { Colophon } from "./components/Colophon";

/** Inspection Copy — the document, assembled. Even its shell testifies. */

export default function App() {
  return (
    <RecordProvider>
      <a className="skip" href="#main">
        Skip to the document
      </a>
      <Inspectable
        as="div"
        id="loupe"
        testimony={testimonies.loupe}
        className="loupe-wrap"
      >
        <LoupeBar />
      </Inspectable>
      <Inspectable
        as="main"
        id="main"
        testimony={testimonies.sheet}
        className="sheet"
      >
        <Masthead />
        <FieldNotes />
        <CaseFiles />
        <Experience />
        <FieldIndex />
        <Archive />
        <Voices />
        <Contact />
        <Colophon />
      </Inspectable>
      <Chip />
    </RecordProvider>
  );
}
