import { randomPassword } from "secure-random-password"
import { useState, useEffect } from "react";
import FadeIn from 'react-fade-in';



function PasswordGenerator() {
    const [currentPassword, setCurrentPassword] = useState('Test password')
    const [settings, setSettings] = useState({
        letters: true,
        numbers: true,
        special: true,
        length: 10
    })

    const[copied, setCopied] = useState(false)

    useEffect(() => {
        generatePassword(settings.letters, settings.numbers, settings.special, settings.length)
    }, [])

    function generatePassword(letters, numbers, special, length) {
        const letterChars = 'abcdefghijlkmnopqrstuvwxyz'
        const numberChars = '1234567890'
        const specialChars = '!@#$%&*()_-=+{}[]?/.,<>~`"' + "'"

        console.log(length)
        const newPassword = randomPassword({length: parseInt(length), characters: (
            (letters && letterChars)+(numbers && numberChars)+(special && specialChars)
        )})
        setCurrentPassword(newPassword)
    }

    function copyPassword() {
        navigator.clipboard.writeText(currentPassword)

        setCopied(true)
    }

    function changeSettings(event) {
        if (event.target.type == 'checkbox') {
            setSettings((prevState) => ({...prevState, [event.target.name]: event.target.checked}))
        } else if (event.target.type == 'range') {
            setSettings((prevState) => ({...prevState, [event.target.name]: event.target.value}))
        }
    }
    
    return (
        <div className="flex align-items-center justify-center items-center flex-col bg-white" data-theme="dark">
            <FadeIn>
            <div className="flex flex-col w-[600px] p-4 rounded-lg m-10 text-black bg-white shadow-lg">
                <div className="flex w-[80%] h-[40px] cool-border justify-between rounded items-center mb-5 self-center p-2 shadow-md">
                    <p>{currentPassword}</p>

                    <div className="flex items-center justify-center gap-2">
                        <button onClick={copyPassword} className="flex hover:text-[#ffb100]">
                            <span className="material-symbols-outlined">content_copy</span>
                        </button>
                    </div>
                </div>
                <input
                    data-theme="dark" 
                    type="range" 
                    className="accent-shocking-pink-400 bg-white range range-secondary range-xs mb-3 mt-2" 
                    onChange={changeSettings} 
                    name="length" 
                    max={40}
                    value={settings.length}>  
                </input>
                <div className="flex justify-between">
                    <p>Password length: {settings.length}</p>
                    <div className="flex items-center content-center">
                        
                        <input className="ml-5 mr-1 checkbox checkbox-warning checkbox-xs" type="checkbox" onChange={changeSettings} name="letters" checked={settings.letters}/><p>Letters</p>
                        <input className="ml-5 mr-1 checkbox checkbox-warning checkbox-xs" type="checkbox" onChange={changeSettings} name="numbers" checked={settings.numbers}/><p>Numbers</p>
                        <input className="ml-5 mr-1 checkbox checkbox-warning checkbox-xs" type="checkbox" onChange={changeSettings} name="special" checked={settings.special}/><p>Special</p>
                    </div>
                </div>
                <button
                    onClick={() => generatePassword(settings.letters, settings.numbers, settings.special, settings.length)} 
                    type="button" 
                    class="flex self-center rounded p-3 text-lg mt-5 pl-10 pr-10 gen-button outline-none shadow-lg transform active:scale-x-75 transition-transform mx-5 flex text-white font-semibold"
                >

                    <span class="ml-2">Generate New Password</span>
                </button>
            </div>
            </FadeIn>

            {copied && <FadeIn><div className="shadow-lg p-3 rounded-lg text-gradient flex items-center bg-white">
                Copied to clipboard!
                <button onClick={() => setCopied(false)} className="flex hover:text-[#ffb100] ml-1">
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div></FadeIn>}
        </div>
        
    )
}

export default PasswordGenerator;
