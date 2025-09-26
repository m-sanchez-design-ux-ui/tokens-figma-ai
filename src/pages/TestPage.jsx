import React from 'react';
import Header from '../components/header/header';
import Filter from '../components/filter/filter';
import Table from '../components/datatable/table';
import Footer from '../components/footer/footer';

export default function TestPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-bg-body gap-gap-xl">
      <Header />
      <Filter />
      <section className='w-full max-w-6xl px-spacing-4'>
        <Table />
      </section>
      <Footer />
    </main>
  );
}
