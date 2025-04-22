'use client';
import React from 'react';
import { Button } from '@/app/components/Button';
import { Card } from "@/app/components/Card";

export default function Home() {
  return (
    <main>
      <Button size="small" onClick={() => alert('Кнопка нажата!')}>
        Кнопка Panda CSS
      </Button>
      <Card
        title="Компонент Card (title, content, Button)"
        content="Это карточка на CSS Modules"
        onClick={() => alert("Кнопка нажата!")}
        buttonText="Нажми меня"
      />
    </main>
  )
}
