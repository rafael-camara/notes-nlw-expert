import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

const note = {
  date: new Date(),
  content: 'Hello World!',
}

export function App() {
  return (
    <div className="mx-5 xl:mx-auto max-w-6xl my-12">
      <div className="space-y-6 pt-12 bg-slate-900 overflow-y-hidden sticky top-0 ring-2 ring-slate-900 z-10">
        <img src={logo} alt="NLW Expert" />

        <form className="w-full">
          <input
            type="text"
            placeholder="Busque em suas notas..."
            className="w-full bg-transparent text-xl sm:text-3xl font-semibold -tracking-tight outline-none placeholder:text-slate-500"
          />
        </form>

        <div className="h-px bg-slate-700 " />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] relative mt-6">
        <NewNoteCard />

        <NoteCard note={note} />
      </div>
    </div>
  )
}
