
function Specification() {

    const data = [
        ["Mode", "#SK10923"],
        ["Brand", "Samsung"],
        ["Size", "6.7 (Inches)"],
        ["Finish", "Pacific Blue"],
        ["Origin Of Country", "United States"],
        ["Manufacturer", "USA"],
        ["Released Year", "2022"],
        ["Warranty", "International"],
    ]
    return (
        <>

        <div className="flex justify-center items-center w-full">
            <table className="w-1/2 border-2">
                {data.map((rows,index)=>(
                    <tr key={index} className={index%2===0 ? "bg-white " : "bg-[#cfcfc8]"  }>
                        <td className="px-9">{rows[0]}</td>
                        <td>{rows[1]}</td>
                    </tr>
                ))}
            </table>
        </div>
            

        </>
    )
}

export default Specification