import { Button } from '@mui/material';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Pokemon.css'
import { useAuth0 } from "@auth0/auth0-react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Pokemon = ({poke}) => {
    
    const {loginWithPopup , loginWithRedirect, logout , user , isAuthenticated} = useAuth0()
  const [pokes , setPokes] = useState([])
  

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then (res=> res.json())
        .then(data=> setPokes(data))
    },[poke])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 console.log(user?.email)

    const addToFavourite = fav => {
       console.log(fav)
        const ordered = {
           email:user?.email,

           name:fav?.species?.name,

           image:fav?.sprites?.front_default,
           

          
        }

        fetch('https://powerful-cliffs-25620.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(ordered)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
        })
        
        
        handleClose();
        
    }
    
    return (
        <div>
             <div>
            <div className="cards">
            <div className="card-content">
                <div className="card-body"> <img style={{height:100}}  className="img img-fluid" src={pokes?.sprites?.front_default}alt=''/>
                    <div className="shadow"></div>
                    <div className="card-title">{poke.name}</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">{pokes?.base_experience}</small> </p>
                    </div>
                   <div>
                   <Button onClick={handleOpen} style={{backgroundColor:'yellow' , color:'dark' , border:'none' , marginBottom:'10px'}}>Favourite</Button>
                   <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                <Box sx={style}>
                 <Typography id="modal-modal-title" variant="h6" component="h2">
                 {poke.name}
                 </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="card-body"> <img style={{height:100}}  className="img img-fluid" src={pokes?.sprites?.front_default}alt=''/>
                </div>
                </Typography>
                {isAuthenticated?<Button onClick={()=>addToFavourite(pokes)}>Add To Favourite</Button>:<Button onClick={loginWithPopup} style={{backgroundColor:'yellow' , color:'dark' , border:'none' , marginBottom:'10px'}}>Favourite</Button>}
                </Box>
                 </Modal>
                   </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Pokemon;