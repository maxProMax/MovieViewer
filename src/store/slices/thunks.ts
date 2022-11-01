import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConfiguration } from 'src/modules/apis/themoviedb';

export const getConfigurationThunk = createAsyncThunk(
    'configuration/get',
    getConfiguration
);
