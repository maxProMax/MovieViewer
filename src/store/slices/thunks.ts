import { createAsyncThunk } from '@reduxjs/toolkit';
import { getConfiguration } from '../../modules/apis/themoviedb';

export const getConfigurationThunk = createAsyncThunk(
    'configuration/get',
    getConfiguration
);
