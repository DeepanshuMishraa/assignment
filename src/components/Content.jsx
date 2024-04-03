const Content = () => {
    return (
      <div className="w-full font-mons">
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
      </div>
    )
  }
  
  export default Content
  