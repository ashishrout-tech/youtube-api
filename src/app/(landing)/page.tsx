import Link from "next/link";


export default function Home() {
  return (
    <div className=" flex flex-col">
      Home Page
      <Link href={"/signin"}>
        <button className=" border">Google Page</button>
      </Link>
      <Link href={"/list"}>LIST</Link>
    </div>
  )
}