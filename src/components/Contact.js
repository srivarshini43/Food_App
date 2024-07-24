const Contact=()=>{
    return(
        <div>
          <h1 className="text-3xl font-bold p-4 m-4">Contact Us</h1>
          <form>
          <input type="text" className="border border-black p-1 m-1" placeholder="name"/>
          <input type="text" className="border border-black p-1 m-1" placeholder="message"/>
          <button className="border border-black p-1 m-2 bg-gray-200 rounded-lg">Submit</button>
          </form>
        </div>
    );
};
export default Contact;