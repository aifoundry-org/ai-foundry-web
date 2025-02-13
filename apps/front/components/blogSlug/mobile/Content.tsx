'use client'
/* eslint-disable */
export default function Content() {
    return (
        <div className='mb-16'>
            <div className='flex flex-col font-normal text-[1.4rem] font-host-grotesk gap-y-[1.6rem] mb-[4rem]'>
                <p className='font-bold text-[1.6rem]'>Content</p>
                <p>Lorem Ipsum sit amet</p>
                <p>Dignissim In elit</p>
                <p>Vitae sed volutpat</p>
                <p>Laoreet quisque</p>
                <p>Lorem Ipsum sit amet</p>
            </div>
            <div className='flex flex-col font-normal text-[1.4rem] font-host-grotesk gap-y-[1.6rem] mb-[2.4rem]'>
                <p>How is data actually being used and processed inside corporations? Who are the internal users of the data, and how is it being utilized?</p>
                <p>In our third Llama Shaving Podcast, Roman and Tanya tap into how data used to work and how it could be transformed to be effectively utilized by large models. The evolution of data simplified is that, at first, data a collected&preprocessed for humans, then - for static predictable algorhtms, and now it needs to come to a concept digestable by large neural networks. And this is the meta-challenge: we do not fully understand how this can be done.</p>
            </div>
            <div className='flex flex-col font-black text-[3.2rem] font-dharma-gothic-e text-orange mb-[2.4rem] leading-[2.6rem] uppercase'>
                <p>“Enim sed ut non diam nibh. Vitae est amet condimentum egestas elementum iaculis parturient. Vitae in sagittis, risus ultricies tempus vestibulum”</p>
            </div>
            <div className='flex flex-col font-normal text-[1.4rem] font-host-grotesk gap-y-[1.6rem] mb-[2.4rem]'>
                <p>Obviously, at first it's used for a lot of decision-making, and that's where business intelligence comes in. This concept isn't new; it started long before computers. Corporations have always needed to make predictions, signaling to stock markets what they expect for the next quarter or further ahead. This is the first level of data usage, a very straightforward, business-oriented approach to making informed decisions.</p>
            </div>
            <div className='flex flex-row items-center justify-between mb-[7vw]'>
                <iframe src="https://www.youtube.com/embed/8vK49z1D55k" className='w-[32.7rem] h-[31.5rem]' />
            </div>
            <div className='flex flex-col font-normal text-[1.4rem] font-host-grotesk gap-y-[1.6rem] mb-[2.4rem]'>
                <p>The second level of data usage emerged with the concept of digitally defined enterprises or digital transformation. Companies realized that the value lay not in the actual product they were selling but in their relationship with their customers. It became about keeping customers engaged, extending the relationship for as long as possible. This was linked to the popularity of social networks, where companies aimed to shape consumer behavior, keeping individuals engaged by analyzing aspects like their economic status, gender identity, and preferences. Enterprises aimed to know everything about their customers to retain their attention for as long as possible.</p>
                <p>Now, we've moved to a third level—the concept of agentic systems. Enterprises are no longer interested only in data for human-driven processes but also for automated agents that work alongside the human workforce. While it may sound futuristic, it could be as simple as automating the task of setting up a meeting, something that often takes multiple emails and phone calls. Such agents need to be trained on data specific to the enterprise, just like a human would need to know the preferences of their colleagues, like not scheduling a meeting before 8 a.m. These agents externalize certain roles within the organization, making operations smoother and more efficient.</p>
                <p>This evolution of how enterprises use data has been heavily influenced by the channels available to reach end users. Initially, channels like newspapers were limited—there was no immediate feedback, and everything had to be curated beforehand. Then came digital transformation and companies like Google, which allowed for personalization on a broader scale. Social networks took this further by not only knowing your search history but also sharing all aspects of your life, effectively controlling the information that reaches you. The stages of enterprise evolution have progressively increased the amount of information companies hold about their customers, and nowadays, applications often ask for permission to share data across different platforms, leading to even more comprehensive insights.</p>
                <p>This vision of interconnected systems reminds me of servants at a mansion gossiping about their masters—constantly sharing information to better serve their master’s needs. This is what today's apps do—share and aggregate data in order to allegedly serve the user better. However, it's also about shaping behavior, controlling what information you see and creating a reality suited to your preferences. This creates a reality where enterprises aren't just personalizing experiences but constructing entire worlds for consumers through every channel possible.</p>
                <p>As we progress, there's a clear question: Who gets to profit from this data? I first noticed this when working on projects involving airlines and engine manufacturers. The data from engines was necessary for the manufacturers to optimize performance, but it was also crucial for airlines to optimize flight routes. The airlines collected this data, so who owned it, and who could benefit from it? This same argument is repeating now between enterprises and companies like OpenAI. Enterprises want to build solutions using OpenAI’s capabilities, but they also recognize that they are providing valuable data for fine-tuning—so why shouldn’t OpenAI adjust the cost in return for that data?</p>
                <p>This tug-of-war is ongoing, and similar dynamics exist in other sectors—like the company that sells and operates elevators in the building where we're recording this. If you don’t pay the license, the whole building is affected. Similar dynamics are at play with complex products like airplane engines. There are only a few manufacturers, and reliability is critical. But is AI the same? On one hand, AI models are complex, and not every enterprise will be able to train their own from scratch. We may end up with a handful of producers creating the core models, with others building on top of them, which could provide a more harmonious ecosystem.</p>
                <p>Ultimately, we may see something similar to the automotive industry—where the engine is an incredibly complex and crucial part, but not the only defining aspect of a car. Similarly, AI models may be provided by a handful of producers, with enterprises adding value on top of them through fine-tuning and specialized data. This could make the conversation around data ownership, privacy, and value exchange much more straightforward. It’s a wishful vision, but one that, if realized, could help enterprises better understand how to build on complex AI systems while respecting data ownership and privacy.</p>
            </div>
        </div>
    );
};
