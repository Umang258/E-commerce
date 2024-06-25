import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, TextField, Button, Box, Paper } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import Category from "../Module/Category";

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (<><div><Category/></div>
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Wishlist
        </Typography>
        <Box display="flex" mb={2}>
          <TextField
            variant="outlined"
            label="Add Item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddItem}
            style={{ marginLeft: '10px' }}
          >
            Add
          </Button>
        </Box>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
    
    </>
  );
};

export default Wishlist;

