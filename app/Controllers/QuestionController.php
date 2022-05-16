<?php

namespace App\Controllers;

use App\Models\QuestionModel;
use CodeIgniter\RESTful\ResourceController;

class QuestionController extends ResourceController
{
    private $db;

    public function __construct()
    {
        // Loading database
        $this->db = db_connect();
    }

    public function getQuestionsbyUserId($user_id)
    {
        $builder = $this->db->table('questions');
        $builder->select('questions.* , users.full_name');
        $builder->Where(['questions.user_id' => $user_id]);
        $builder->join('users', 'questions.user_id = users.id');
        $builder->orderBy('questions.created_at', 'asc');

        $data = $builder->get()->getResult();
        if (!$data) return $this->failNotFound('Not Found');
        $response = [
            'status' => 200,
            'message' =>  'success',
            'data' => $data
        ];
        return $this->respond($response);
    }

    public function getQuestions()
    {

        $builder = $this->db->table('questions');
        $builder->select('questions.* , users.full_name');
        $builder->join('users', 'questions.user_id = users.id AND users.role = "USER_ROLE"');
        $builder->orderBy('questions.created_at', 'asc');

        $data = $builder->get()->getResult();
        if (!$data) return $this->failNotFound('Not Found');
        $response = [
            'status' => 200,
            'message' =>  'success',
            'data' => $data
        ];
        return $this->respond($response);
    }

    public function create()
    {
        helper(['form']);

        $rules = [
            'title' => 'required',
            'description' => 'required',
            'user_id' => 'required',
        ];

        $data = [
            'title' => $this->request->getVar('title'),
            'description' => $this->request->getVar('description'),
            'user_id' => $this->request->getVar('user_id'),
        ];

        if (!$this->validate($rules))
            return $this->fail($this->validator->getErrors());

        $model = new QuestionModel();
        $model->save($data);

        $response = [
            'status' => 201,
            'message' => 'success',
        ];

        return $this->respondCreated($response);
    }

    public function updateStatus()
    {
        helper(['form', 'url']);

        $model = new QuestionModel();

        $id = $this->request->getVar('id');

        $data = [
            'status' => $this->request->getVar('status'),
        ];

        $save = $model->update($id, $data);

        return $this->respondUpdated($save);
    }
}
