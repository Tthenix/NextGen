import { Card, Typography } from "@material-tailwind/react";

const TECHNOLOGIES = ["Next.js", "MySql", "Node.js"];
const PARTICIPANTS = [["Nahue", "Jero", "Sofi"], ["Alice"], ["Bob", "Eva"]];

export function Table() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                TECHNOLOGIES
                            </Typography>
                        </th>
                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                PARTICIPANTS
                            </Typography>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {TECHNOLOGIES.map((technology, index) => (
                        <tr key={technology}>
                            <td className="border-b p-4">{technology}</td>
                            <td className="border-b p-4 bg-blue-gray-50/50">
                                {PARTICIPANTS[index].map((participant, subIndex) => (
                                    <div key={subIndex} className="bg-blue-gray-50/50`">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {participant}
                                        </Typography>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
