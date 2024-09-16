import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Default from "@/components/Loaders/Default";
import Line from "@/components/Loaders/Line";
import Image from "next/image";
import svg from '../assets/copy.svg'

export default function Home() {
  const cardStyle = "w-[15vw] bg-[#0c0c0c] border-[#3a3a3a] text-white "
  const Loaders = [
    {contend: <Default choseVariant={"default"} />, title: 'Default loader'}, 
    {contend:  <Line lineSize={'90%'} color="#5c2df1" />, title: 'Line loader'}, 
    {contend:  <Default choseVariant={"w-12 h-12 border-4 border-green-500 border-t-transparent border-solid rounded-full animate-spin-ease"} />, title: 'Slowed loader'},
    {contend: <Default choseVariant={"secondary"} />, title: 'Default loader'}
  ]

  const Cards = Loaders.map((item) => {
    return (
      <Card key={Loaders.indexOf(item)} className={`cursor-pointer ${cardStyle}`}>
        <CardHeader>
          <CardTitle className="flex justify-between ">
            {item.title} <Image src={svg} alt="" />
          </CardTitle>
          <CardDescription>Circular custom loader</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          {item.contend}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  })

  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-3 gap-24 p-12">
      {Cards}
      </div>
    </div>
  );
}
