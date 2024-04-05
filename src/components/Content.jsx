import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpeg';

const Content = () => {
    return (
        <div className="w-full font-mons p-4 max-lg:p-0">
            <h1 className="mt-4 p-2 font-bold max-lg:text-2xl max-lg:text-center text-4xl">Getting Started</h1>
            <div className="border bg-gray-100 mr-2 ml-2">
                <div className="font-light text-lg p-4">
                    <p style={{ lineHeight: "1.7", marginBottom: "12px" }}>
                        🔒This doc is your <span className="font-bold">private channel</span> where you can store all your private work. You can share docs one by one from here, but to properly organize your team's work knowledge base, use <span className="font-bold">workspace channels</span>.
                    </p>
                    <p style={{ lineHeight: "1.7", marginBottom: "12px" }}>
                        You can make channels <span className="font-bold">public</span> to make all docs visible to everyone on the team, or <span className="font-bold">private</span> if you want the channel docs to only be visible by a selection of teammates.
                    </p>
                </div>
            </div>

            <h1 className="font-bold text-3xl mt-8 p-2 max-lg:text-sm">Collaborate with your team with these three features</h1>

            <h1 className="font-bold text-3xl mt-4 p-2 max-lg:text-md">✍️Docs</h1>

            <div>
                <img src={c1} alt="content image" className='w-full h-64 mt-10 object-cover' />
            </div>
            <div className='flex items-center justify-center'>
            <input type="text" placeholder='💡 Give it a go by typing / below' className='mt-28 h-10  p-2 font-normal text-md bg-gray-100 placeholder-black rounded  w-[50rem] mx-auto' />
            </div>
        </div>
    );
};

export default Content;
