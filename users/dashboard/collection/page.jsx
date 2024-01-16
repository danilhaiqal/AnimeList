import Image from "next/image"
import Link from "next/link"
import Header from "@/app/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async () => {
    const User = await authUserSession()
    const collection = await prisma.collection.findMany({ where: { user_email: User.email } })


    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {collection.map((collect, index) => {
                    return (
                    <Link key={index} href={`/anime/${collect.anime_mal_id}`} className="relative">
                        <Image src={collect.anime_image}
                         alt={collect.anime_image} 
                        width={350} height={350} className="w-full" />
                        <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                            <h3 className="text-xl text-center">{collect.anime_title}</h3>
                        </div>
                    </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Page