import Layout from '@/Layout/Main.Layout';
import About from '@/components/About';
// import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience/index';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import { PostType } from '@/types/PostType';
import React, { FC } from 'react';

interface Props {
    Posts: [PostType];
}

const Home: FC<Props> = () => {
    return (
        <Layout>
            <Intro />
            <About />
            <Experience />
            <Testimonials />
            <Projects />
            <Skills />
            {/* <Blog Posts={Posts} /> */}
            <Contact />
        </Layout>
    );
};

export default Home;
