import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";
import gitLogo from "../img/github.svg"
import linkLogo from "../img/link.svg"


export function Redes() {
    return (
        <Card className="w-96">
            <List>
                <ListItem className="flex items-center space-x-4">
                    <ListItemPrefix>
                        <img src={gitLogo} alt="GitHub Icon" className="h-6 w-6" />
                    </ListItemPrefix>
                    <div className="flex flex-col">
                        <a
                            href="https://github.com/Tthenix"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-gray-800 hover:underline"
                        >
                            <Typography variant="h6" color="blue-gray">
                                GitHub link
                            </Typography>
                        </a>
                        <Typography variant="small" color="gray" className="font-normal">
                            https://github.com/Tthenix
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className="flex items-center space-x-4">
                    <ListItemPrefix>
                        <img src={linkLogo} alt="GitHub Icon" className="h-6 w-6" />
                    </ListItemPrefix>
                    <div className="flex flex-col">
                        <a
                            href="https://www.spaceappschallenge.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-gray-800 hover:underline"
                        >
                            <Typography variant="h6" color="blue-gray">
                                Page link
                            </Typography>
                        </a>
                        <Typography variant="small" color="gray" className="font-normal">
                            https://www.spaceappschallenge.org/
                        </Typography>
                    </div>
                </ListItem>
            </List>
        </Card>
    );
}