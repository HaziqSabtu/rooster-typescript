import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import LayoutMain from "../Layout/LayoutMain";
import { HeadSetting } from "../Head";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/sliceCurrentUser";
import { User } from "next-auth";
import SettingContentUN from "./SettingContentUN";
import SettingContentPP from "./SettingContent";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function SettingPage() {
    const currentUser = useSelector(selectCurrentUser);
    const [userData, setUserData] = useState(currentUser);

    useEffect(() => {
        if (currentUser) {
            setUserData(currentUser);
        }
    }, [currentUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setUserData((oldUserData) => {
            return {
                ...oldUserData,
                name: value,
            } as User;
        });
    };

    const settingItem = [
        {
            title: "Change_UserName",
            desc: "change your username here",
            content: SettingContentUN,
            change: true,
        },
        {
            title: "Change_Profile_Picture",
            desc: "change your profile picture here",
            content: SettingContentPP,
            change: false,
        },
    ];

    return (
        <>
            <HeadSetting />
            <LayoutMain>
                <Tab.Group>
                    <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
                        {settingItem.map((item) => (
                            <Tab
                                key={item.title}
                                className={({ selected }) =>
                                    classNames(
                                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                        selected
                                            ? "bg-white shadow"
                                            : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                                    )
                                }
                            >
                                {item.title}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className='mt-2'>
                        {settingItem.map((item) => (
                            <item.content
                                key={item.title}
                                title={item.title}
                                desc={item.desc}
                                userData={userData as User}
                                handleChange={handleChange}
                            />
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </LayoutMain>
        </>
    );
}
