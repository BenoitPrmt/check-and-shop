import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "~/components/ui/dialog";
import {Button} from "~/components/ui/button";
import {Separator} from "~/components/ui/separator";
import RingImage from "~/components/assets/RingImage";
import {GithubIcon, GlobeIcon, LinkedinIcon, TwitterIcon} from "lucide-react";
import React from "react";

const AboutModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="ghost" className="ml-auto cursor-pointer">
                    À propos
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={"text-2xl"}>
                        À propos de <span className="font-bold bg-gradient-to-r from-orange-600 to-yellow-500 text-transparent bg-clip-text">Check & Shop</span>
                    </DialogTitle>
                    <DialogDescription>
                        Check & Shop est une application web de gestion de listes de courses. Elle a été développée en <span className="font-bold text-[#3078c6]">Typescript</span> avec <span className="font-bold text-[#58c4dc]">React</span> et <span className="font-bold text-[#00bcff]">Tailwind CSS</span> et un back-end en <span className="font-bold text-[#4f5b93]">PHP</span> avec le framework <span className="font-bold text-[#3faf7c]">Leaf</span>.
                    </DialogDescription>

                    <Separator className="my-3" />

                    <div className="flex flex-row gap-5 items-center">
                        <div>
                            <RingImage imageUrl="/assets/images/avatar.png" altText="BenoitPrmt" size="lg" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-lg">Benoît Parmentier</p>
                            <p className="text-gray-700">Je suis un développeur web passionné par la création de jeux et d&#39;outils en ligne.</p>
                            <div className="flex flex-row gap-5 items-center">
                                <a href="https://benoit.fun" target="_blank" rel="noreferrer">
                                    <GlobeIcon className={"size-6 hover:text-orange-500 transition-colors cursor-pointer"} />
                                </a>
                                <a href="https://github.com/BenoitPrmt" target="_blank" rel="noreferrer">
                                    <GithubIcon className={"size-6 hover:text-black transition-colors cursor-pointer"} />
                                </a>
                                <a href="https://www.linkedin.com/in/benoit-parmentier/" target="_blank" rel="noreferrer">
                                    <LinkedinIcon className={"size-6 hover:text-[#0b66c2] transition-colors cursor-pointer"} />
                                </a>
                                <a href="https://x.com/BenoitDotDev" target="_blank" rel="noreferrer">
                                    <TwitterIcon className={"size-6 hover:text-[#1ca9e6] transition-colors cursor-pointer"} />
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AboutModal;