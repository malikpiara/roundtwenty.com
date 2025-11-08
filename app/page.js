import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CardPerson from "@/components/ui/cardPerson";
import PeopleSection from "@/components/ui/peopleSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#111110]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">


        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
           We're RoundTwenty.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            We build products that foster connection, enable education and create more access to opportunities.
          </p>
          <div className="w-full space-y-6">
            <section id='communities-section'>
            <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-zinc-50 mb-5">
           Our Communities
          </h1>
          <div className="flex gap-3 flex-col leading-12 w-full">

              <Link href='https://lisboaux.com/'>
              <Card>
  <CardHeader>
    <CardTitle>LisboaUX</CardTitle>
    <CardDescription>For interaction designers and UX researchers. We host talks & intimate dinners to nurture growth and belonging every month.</CardDescription>
  </CardHeader>
</Card>
  </Link>

   <Link href='https://lisboajs.org/'>
              <Card className=''>
  <CardHeader>
    <CardTitle>LisboaJS</CardTitle>
    <CardDescription>For anyone who creates software with or without JavaScript. We host a co-working day every Friday. Beginners are welcome too.</CardDescription>
  </CardHeader>
</Card>
  </Link>
   <Link href='https://outono.org/'>
              <Card className=''>
  <CardHeader>
    <CardTitle>Outono</CardTitle>
    <CardDescription>For Portuguese who live abroad and who work in tech. We host dinners in London and Berlin every month.</CardDescription>
  </CardHeader>
</Card>
  </Link>

              </div>
              </section>
              <section id="people-section">
                <h1 className="max-w-xs text-2xl font-semibold leading-10 tracking-tight text-zinc-50 mb-5">
           People
          </h1>
          <PeopleSection/>
              </section>
          </div>
          </div>


      </main>
    </div>
  );
}
