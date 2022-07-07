import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"

const GET_TECHS_QUERY = gql `
query MyQuery {
    techs {
        title
        slug
        icon {
            url
        }
    }
}
`

interface TechsQuery {
    techs: {
        title: string
        slug: string
        icon: {
            url: string
        }
    }[]
}

export function TechsList() {
    const { data } = useQuery<TechsQuery>(GET_TECHS_QUERY)

    return (
        <div className="pt-3 flex gap-3 flex-wrap">
            {data?.techs.map((tech, key) => (
                <Link 
                    className="p-2 flex flex-col flex-auto items-center rounded shadow-[0px_0px_3px_1px_rgba(100,116,139,0.5)] hover:scale-105 transition-transform"
                    to={`tech/${tech.slug}`} 
                    key={key} 
                >
                    <img src={tech.icon.url} alt="" className="w-8 mx-2"/>
                    <strong className="font-semibold">
                        {tech.title}
                    </strong>
                </Link>
            ))
            }

        </div>
    )
}