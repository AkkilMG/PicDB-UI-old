/**
 * (c) 2022-2023 PicDB | Akkil M G
 * @author: Akkil M G (https://github.com/HeimanPictures)
 * @license: GNU General Public License v3.0
**/ 

import Upload from "../asset/upload.png"
import { useState } from "react"
import axios from 'axios';

function Home() {
  // const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const [title, setTitle] = useState();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const handleChange = async (e) => {
    // setFile(URL.createObjectURL(e.target.files[0]));
    // setFile(e.target.files[0]);
    const file = e.target.files[0]
    if (!file) {
      alert('Please select an image before uploading.');
      return;
    }
    if ((file.size/(1024*1024))>50) {
      alert('Please select an image under 50mb. As its a limit.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('file', file, file.name);
      const config = {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
        },
      };
      
      axios.post('https://picdb-api.onrender.com/api/v1/upload', formData, config)
        .then((response) => {
          // console.log(response.data['success']);
          if (response.data['success'] === "true") {
            setTitle(file.name);
            setUrl(response.data["url"]);
          } else {
            setError(true)
            setProgress(0)
            alert('File uploaded not successful.');
          }
        })
        .catch((error) => {
          alert('Error uploading file:', error);
        });
    } catch (error) {
      alert('Error uploading file:', error);
    }
  }

  // const [isCopied, setIsCopied] = useState(false);
  const [buttonText, setButtonText] = useState('Copy');
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // setIsCopied(true);
      // setTimeout(() => {
      //   setIsCopied(false);
      // }, 3000);
      setButtonText('Copied');

      setTimeout(() => {
        setButtonText('Copy');
      }, 2500); //Make the button text normal after 2.5 seconds
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

    return (
      <>
        <main className="body-font">
            <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
                <div className="flex flex-col items-center w-full text-center ">
                    <h1 className="w-full mb-4 text-2xl font-bold text-orange-600 title-font sm:text-6xl">
                        Welcome To <span className="text-blue-600">PicDB</span>, Explore Powerful!
                    </h1>
                    { (url!=null) ? (
                      <div className="flex items-end justify-center w-full">
                        <div className="relative w-3/5 mr-4 text-left md:w-full lg:w-full xl:w-1/2">
                            <label className="text-lg font-semibold leading-10 text-white">{ title }</label>
                            <div className="relative">
                                <input className="w-full px-4 py-3 text-xl font-medium leading-8 text-white transition duration-200 ease-in-out bg-gray-700 border-transparent rounded-md shadow-2xl outline-none border-y border-t-gray-600 focus:border focus:border-blue-600 focus:bg-transparent focus:ring-2 focus:ring-blue-600"
                                    value={url} readOnly />
                                <a href={url} target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="absolute w-6 h-6 text-orange-600 transform -translate-y-1/2 right-3 top-1/2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                                </a>
                            </div>
                        </div>
                        <button onClick={handleCopyToClipboard} type="button" className="inline-flex flex-shrink-0 px-6 py-4 text-lg font-semibold text-white transition bg-orange-600 border-0 rounded hover:bg-orange-600 hover:brightness-50 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 transition">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                        COPY
                        </button>
                    </div>
                    ) : (
                    <div className="flex items-end justify-center w-full">
                      <div className="relative mr-4 text-left md:w-full lg:w-full xl:w-1/2">
                        <div className="relative flex items-center justify-center min-h-screen px-4 py-12 bg-no-repeat bg-cover sm:px-6 lg:px-8">
                          <div className="absolute inset-0 z-0"></div>
                          <div className="z-10 w-full p-10 bg-gray-700 bg-opacity-70 sm:max-w-lg rounded-xl">
                            <div className="text-center">
                              <h2 className="mt-5 text-3xl font-bold text-gray-200">Image Upload!</h2>
                              <p className="mt-2 text-sm text-gray-200">Free unlimited cdn for images.</p>
                            </div>
                            <form className="mt-8 space-y-3" encType="multipart/form-data" method="post">
                              <div className="grid grid-cols-1 space-y-2">
                                <label className="text-sm font-bold tracking-wide text-gray-200">Attach Image</label>
                                  <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-20">
                                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                          <div className="flex flex-auto">
                                              <img className="object-center h-36" src={Upload} alt="upload" />
                                          </div>
                                          <p className="text-center text-gray-200 pointer-none"><span className="text-sm">Drag and drop</span> images here <br /> or <span className="text-blue-600">Click to upload</span> from your computer</p>
                                      </div>
                                      <input id="file" name="file" type="file" className="hidden" accept="image/*" onChange={handleChange} required/>
                                    </label>
                                  </div>
                                  <p className="text-sm text-gray-200 pointer-none"><span>File type: jpg, png, jpeg, etc.</span></p>
                                  {/* {% if error %}
                                          <p className="w-full my-4 font-semibold text-center text-orange-600 text-md animate-pulse">{{ error }}</p>
                                          {% endif %}
                                          <input type="submit" value="Upload" className="flex justify-center w-full p-4 my-5 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in bg-blue-500 rounded-full shadow-lg cursor-pointer focus:outline-none focus:shadow-outline hover:bg-blue-600"
                                          /> */}
                                  {
                                    (progress && !error)?(
                                      <div className="w-full">
                                        <div className="bg-gray-600 rounded-lg">
                                          <div className="flex items-center bg-orange-600 rounded-lg" style={{ width: `${progress}%` }}>
                                            <span className="mx-auto text-white">{(progress===100)? `Creating CDN...`: `${progress}%` }</span>
                                         </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <>
                                      </>
                                    )
                                  }
                                </div>
                              </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                </div>
            </div>
        </main>
      </>
    );
}
export default Home;
  
