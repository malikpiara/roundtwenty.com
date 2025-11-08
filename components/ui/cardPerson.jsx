import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function CardPerson({
  className,
  name = 'Name',
  role = 'Role',
  imageSrc = '/malik.jpeg',
  ...props
}) {
  return (
    <>
      <Card className='w-63 pt-0'>
        <CardContent className='text-muted-foreground p-0 m-0'>
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={name}
            className='w-full grayscale opacity-20 hover:opacity-60 transition-all p-2.5'
          />
        </CardContent>
        <CardFooter>
          <div className='flex flex-col'>
            <div className='leading-none font-semibold text-zinc-50'>
              {name}
            </div>
            <div className='text-muted-foreground text-sm'>{role}</div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
