import axios from 'axios';

export const getTasksRequest = async () =>
    await axios.get('https://mernappfullstack-job.herokuapp.com/tasks');

export const createTaskRequest = async (task) =>
    await axios.post('https://mernappfullstack-job.herokuapp.com/tasks', task);

export const deleteTaskRequest = async (id) =>
    await axios.delete(`https://mernappfullstack-job.herokuapp.com/tasks/${id}`);

export const getTaskRequest = async (id) =>
    await axios.get(`https://mernappfullstack-job.herokuapp.com/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
    await axios.put(`https://mernappfullstack-job.herokuapp.com/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, done) =>
    await axios.put(`https://mernappfullstack-job.herokuapp.com/tasks/${id}`,{
        done,
    });