export default function ValuesPage() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans bg-[#111110]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-24 px-16 sm:items-start">


        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
           We're RoundTwenty.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            We build products that foster connection, enable learning and increase access to opportunities.
          </p>

          <section id='communities-section'>
            <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-zinc-50 mb-5">
           Our Values
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            1. Set high standards. Then, keep raising them.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            2. Embrace iteration.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            3. Be compassionate. We are inherently flawed.
          </p>
          <p className="max-w-lg text-lg leading-8 text-zinc-400">
            4. Do what you say. Earn your trust by always following through on your word.
          </p>
          <p className="max-w-lg text-lg leading-8 text-zinc-400">
            5. Give. Share your knowledge openly and aim to make life for everyone around you more joyful. Be of service to society.
          </p>
          <p className="max-w-lg text-lg leading-8 text-zinc-400">
            6. Be curious. Seek to understand.
          </p>
          <p className="max-w-lg text-lg leading-8 text-zinc-400">
            7. Promote mindfulness. Remove distractions. Avoid meetings and default to asyncronous communication.
          </p>
          <p className="max-w-lg text-lg leading-8 text-zinc-400">
            8. Think and build for long-term. Build long-term relationships.
          </p>
          </section>

          </div>

      </main>
    </div>
    )
}