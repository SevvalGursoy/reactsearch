import React from 'react';
import './style.css';

import Data from '../mock-data.json';
import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArticleIcon from '@mui/icons-material/Article';

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="app">
      <Box
        component="span"
        sx={{
          color: 'darkslategray',
          backgroundColor: 'aliceblue',
          padding: 4,
          borderRadius: 4,
        }}
      >
        <Box
          component="span"
          sx={{
            color: 'darkslategray',
            backgroundColor: 'aliceblue',
            padding: 1,
            borderRadius: 12,
          }}
        >
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 3 }} />
          <TextField
            id="input-with-sx"
            label="Search (Client Name / Policy Number)"
            variant="standard"
            onChange={(event) => setQuery(event.target.value)}
            className="search-bar"
          />
        </Box>
        {Data.filter((data) => {
          if (query === '') {
            return data;
          } else if (data.name.toLowerCase().includes(query.toLowerCase())) {
            return data;
          } else if (data.policy.toLowerCase().includes(query.toLowerCase())) {
            return data;
          }
        })
          .sort((postA, postB) => (postA.date > postB.date ? -1 : 1))

          .map((data, index) => (
            <div className="box" key={index}>
              <div>
                <p>{data.name}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p>
                  <LocalPhoneIcon />

                  {data.phone}
                </p>
                &nbsp; &nbsp; &nbsp;
                <p>
                  <AlternateEmailIcon />

                  {data.email}
                </p>
                &nbsp; &nbsp; &nbsp;
                <p>
                  <ArticleIcon />
                  Policy No. {data.policy}
                </p>
                &nbsp; &nbsp; &nbsp;
              </div>
            </div>
          ))}
      </Box>
    </div>
  );
}
