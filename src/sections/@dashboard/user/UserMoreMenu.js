import { useRef, useState } from 'react';
import * as React from 'react';
import Form from 'react-bootstrap/Form';

import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// component
import Iconify from '../../../components/Iconify';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers,deleteUser,disableUser } from 'src/redux/slices/userSlice';

// ----------------------------------------------------------------------
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

export default function UserMoreMenu({id,status}) {
export default function UserMoreMenu({id,deleteComment}) {

export default function UserMoreMenu({product}) {
  console.log(product)
  const ref = useRef(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userDeleted,errs] =useSelector(deleteUsers)
  const dispatch = useDispatch()
  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  

  const handleEditBrand = async (e,id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
   
    try {
      const [res, err] = await queryApi('brand/edit-brand/'+id, {name,image}, 'PUT',true);
      console.log(formData)
     
                      dispatch(updateBrand(res))
                    
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <> 
    

      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>
      
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" onClick={()=>deleteComment(id)} primaryTypographyProps={{ variant: 'body2' }} />
          <ListItemText  onClick={()=>dispatch(deleteUser(id))} primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText onClick={()=>dispatch(disableUser(id))} primary={status?"Disable":"Enable"}  />
         
         
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
        
        </MenuItem>
      </Menu>
        
    </>
  );
}
