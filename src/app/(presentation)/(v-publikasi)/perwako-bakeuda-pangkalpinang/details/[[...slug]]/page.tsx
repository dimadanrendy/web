
export default function DetailsPerwako({ params }: {
    params: { slug: string[] }
}) {

    const { slug } = params
    if (slug?.length === 2) {
        return <div>{slug[0]} {slug[1]}</div>
    }
    return (
        <div>
            <h1>Folder as</h1>
        </div>
    )
}
