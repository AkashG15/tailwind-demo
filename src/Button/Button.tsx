export const Button:React.FC<{
    label:string;
    }>=({label})=>{ 
    
        return(
            <button className="w-32 bg-orange-400 "> No dynamic lable </button>
        
        );
    }

    export const Buttonx:React.FC<{
        labelx:string;
        }>=({labelx})=>{ 
        
            return(
                <button className="w-32 bg-gray-400 ">{labelx} </button>
            
            );
        }
        
    