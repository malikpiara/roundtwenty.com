import CardPerson from './cardPerson';

export default function PeopleSection() {
  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mx-6 sm:-mr-32 md:-mr-48 lg:-mr-64'>
        <CardPerson name='Malik Piara' role='Founder' imageSrc='/malik.jpeg' />
        <CardPerson
          name='Carlos Resende'
          role='Partner'
          imageSrc='/carlos.jpeg'
        />
        <CardPerson
          name='Gonçalo Salgado'
          role='Partner'
          imageSrc='/goncalo.jpeg'
        />
        <CardPerson
          name='Maria Guimarães'
          role='Partner'
          imageSrc='/maria.jpeg'
        />
        <CardPerson
          name='Stewart Noakes'
          role='Partner'
          imageSrc='/stewart.jpeg'
        />
        <CardPerson
          name='Fernando Fraga'
          role='Partner'
          imageSrc='/fernando.jpeg'
        />
      </section>
    </>
  );
}
