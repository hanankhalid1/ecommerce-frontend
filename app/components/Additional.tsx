
function Additonal() {

    const data = [
        ["Weight", "0.240 kg"],
        ["Dimensions", "0.74 x 7.64 x 16.08 cm"],
        
    ]
    return (
        <>
        <h1 className="text-3xl text-[#425A8B] font-semibold p-4 px-14">Additonal information</h1>

        <div className="flex justify-center items-center p-7">
            <table className="border-2 w-5/6">
                {data.map((rows,index)=>(
                    <tr key={index}
                    className={index%2===0 ? "bg-white " : "bg-[#cfcfc8]"  }
                    >
                        <td className="px-9">{rows[0]}</td>
                        <td>{rows[1]}</td>
                    </tr>
                ))}
            </table>
        </div>
            

        </>
    )
}

export default Additonal