import Image from 'next/image';
import Link from 'next/link';
import {
    Github,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Mail,
    Globe,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 p-4 dark:from-slate-900 dark:to-slate-800">
            <Card className="w-full max-w-md">
                <CardContent className="p-6">
                    <div className="flex flex-col space-y-6">
                        {/* Profile Section */}
                        <div className="flex flex-row items-center space-x-4">
                            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary">
                                <Image
                                    src="https://github.com/Lfmpaes.png"
                                    alt="Luiz Fernando M. Paes"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <h1 className="text-xl font-bold">
                                    Luiz Fernando M. Paes
                                </h1>
                                <p className="text-muted-foreground">
                                    Developer
                                </p>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="grid w-full gap-3">
                            <Button
                                asChild
                                variant="outline"
                                className="flex h-12 justify-start gap-3 px-4">
                                <Link
                                    href="https://github.com/Lfmpaes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Github className="h-5 w-5" />
                                    <span>GitHub</span>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex h-12 justify-start gap-3 px-4">
                                <Link
                                    href="https://x.com/Lfmpaes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Twitter className="h-5 w-5" />
                                    <span>Twitter</span>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex h-12 justify-start gap-3 px-4">
                                <Link
                                    href="https://linkedin.com/in/Lfmpaes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Linkedin className="h-5 w-5" />
                                    <span>LinkedIn</span>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex h-12 justify-start gap-3 px-4">
                                <Link
                                    href="https://instagram.com/Lfmpaes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Instagram className="h-5 w-5" />
                                    <span>Instagram</span>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex h-12 justify-start gap-3 px-4">
                                <Link
                                    href="https://youtube.com/Lfmpaes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Youtube className="h-5 w-5" />
                                    <span>YouTube</span>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex h-12 justify-start gap-3 px-4">
                                <Link
                                    href="mailto:contato@lfmpaes.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Mail className="h-5 w-5" />
                                    <span>Email</span>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex h-12 justify-start gap-3 px-4">
                                <Link
                                    href="https://lfmpaes.com.br"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Globe className="h-5 w-5" />
                                    <span>Lfmpaes.com.br</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <footer className="mt-8 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Luiz Fernando M. Paes</p>
            </footer>
        </main>
    );
}
