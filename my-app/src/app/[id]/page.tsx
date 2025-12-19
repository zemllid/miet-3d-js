'use client';

import { useParams, useRouter } from 'next/navigation';
import { sheets } from '@/data/sheets';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function SheetPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const sheet = sheets.find(s => s.id === id);

    if (!sheet) {
        return (
            <div className='max-w-4xl mx-auto px-4'>
                <Button onClick={() => router.push('/')} variant='ghost' className='mb-6'>
                    <ArrowLeft className='h-4 w-4 mr-2' />
                    Назад
                </Button>
                <div className='text-center py-12'>
                    <p>Ноты не найдены</p>
                </div>
            </div>
        );
    }

    const pageImages = sheet.imagesData.totalPages
        ? Array.from(
              { length: sheet.imagesData.totalPages },
              (_, i) => `/sheets/${sheet.imagesData.imageBase}.${i + 1}.jpg`
          )
        : [];

    return (
        <div className='max-w-2xl mx-auto flex flex-col gap-y-4'>
            {/* Кнопка назад */}

            <div className='flex items-center gap-4'>
                <Button onClick={() => router.back()} variant='ghost' size='sm' className='flex items-center gap-2'>
                    <ArrowLeft className='size-4' />
                    Назад
                </Button>
            </div>

            {/* Название */}
            <div className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-4xl font-bold tracking-tight'>{sheet.title}</h1>
                    <p className='text-xl text-muted-foreground'>{sheet.composer}</p>
                </div>

                <div className='flex gap-2'>
                    <Badge variant='secondary'>{sheet.difficulty.toUpperCase()}</Badge>
                    <Badge>{sheet.instrument}</Badge>
                    {sheet.imagesData.totalPages && (
                        <Badge variant='outline'>{sheet.imagesData.totalPages} страниц</Badge>
                    )}
                </div>
            </div>

            {/* Табы */}
            <Tabs defaultValue='overview' className='w-full'>
                <TabsList className='grid w-full grid-cols-3'>
                    <TabsTrigger value='overview'>Обзор</TabsTrigger>
                    <TabsTrigger value='score'>Ноты</TabsTrigger>
                    <TabsTrigger value='description'>Описание</TabsTrigger>
                </TabsList>
                <TabsContent value='overview' className='mt-6'>
                    <div className='space-y-4'>
                        <p>{sheet.overview}</p>
                    </div>
                </TabsContent>
                <TabsContent value='score' className='mt-6'>
                    <div className='space-y-6'>
                        {pageImages.map((imageUrl, index) => (
                            <div key={index} className='relative w-full rounded-lg overflow-hidden shadow-lg border'>
                                <div className='absolute top-4 left-4 z-10'>
                                    <Badge className='bg-black/70 text-white'>Страница {index + 1}</Badge>
                                </div>

                                <div className='relative h-[800px] w-full bg-white'>
                                    <Image
                                        src={imageUrl}
                                        alt={`${sheet.title} - Страница ${index + 1}`}
                                        fill
                                        className='object-contain'
                                        sizes='(max-width: 768px) 100vw, 800px'
                                        priority={index === 0}
                                        onError={e => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value='description' className='mt-6'>
                    <p className='whitespace-pre-wrap'>{sheet.description}</p>
                </TabsContent>
            </Tabs>
        </div>
    );
}
