"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


export type ServiceProps = {
    title: string
    description: string
    url: string
    imgUrl: string
}

export function ServiceCard({ title, description, url, imgUrl }: ServiceProps) {
    return (
        <CardContainer className="shadow-2xl">
            <CardBody className="bg-white relative group/card border-black/10 w-auto sm:w-120 h-auto rounded-xl p-6 border">

                <CardItem translateZ="100" className="w-full mt-4 flex items-center gap-2 flex-col ">
                    <img
                        src={imgUrl}
                        className="h-40 object-fit rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                    <h1 className="text-secondary text-md md:text-2xl font-bold">{title}</h1>
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 leading-relaxed mt-4"
                >
                    {description}
                </CardItem>
                <div className="flex justify-between items-center mt-10 float-right">
                    <Link href={url}>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-background-secondary text-white text-xs font-bold hover:cursor-pointer hover:bg-blue-700"
                        >
                            Learn More
                        </CardItem>
                    </Link>
                </div>
            </CardBody>
        </CardContainer>
    );
}
