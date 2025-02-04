import { MdOutlineArrowForward } from "react-icons/md";
import { PhotoUploader } from "../Profile/PhotoUploader";
import { NavLink } from "react-router";

export function Amount() {
    const handleInput = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    };

    const handleAddNote = (e) => {
        console.log(e.target.value)
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="text-4xl font-bold mb-2 bg-amber-700 w-15 h-15 flex justify-center items-center rounded-full">H</div>
            <p className="text-lg mb-4">Himanshu</p>
            <div className="text-sm mb-4">UPI ID: 84238482394823</div>
            <div className="flex items-center gap-3">
                
                <input 
                    type="text" 
                    placeholder="&#8377;"
                    onInput={handleInput} 
                    className="w-32 p-2 text-white rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
            </div>

            <NavLink to = '/pin'><button className="mt-4 cursor-pointer bg-blue-700 w-40 p-4 rounded-4xl flex justify-center items-center"><MdOutlineArrowForward /></button></NavLink>
            
            <section className="mt-5 gap-20 flex">
                <input 
                    type="text" 
                    onInput={handleAddNote}
                    placeholder="Add Note" 
                    className="placeholder-gray-600 w-32 p-2 text-white rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <PhotoUploader/>
            </section>

            
        </div>
    );
}
