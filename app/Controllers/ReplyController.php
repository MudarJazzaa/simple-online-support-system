<?php

namespace App\Controllers;

use App\Models\ReplyModel;
use App\Services\UserService;
use CodeIgniter\RESTful\ResourceController;
use Config\Services;

class ReplyController extends ResourceController
{

    private $db;

    public function __construct()
    {
        $this->db = db_connect(); // Loading database
    }
    public function create()
    {
        helper(['form']);

        $rules = [
            'text' => 'required',
            'user_id' => 'required',
            'question_id' => 'required',
        ];

        $data = [
            'text' => $this->request->getVar('text'),
            'user_id' => $this->request->getVar('user_id'),
            'question_id' => $this->request->getVar('question_id'),
        ];

        if (!$this->validate($rules))
            return $this->fail($this->validator->getErrors());

        $model = new ReplyModel();
        $model->save($data);
        $response = [
            'status' => 201,
            'messages' => 'success'
        ];

        return $this->respondCreated($response);
    }


    public function getReplies()
    {
        $model = new ReplyModel();
        $data = $model->findAll();
        $response = [
            'status' => 200,
            'error' => null,
            'message' =>  'success',
            'data' => $data
        ];
        return $this->respond($response);
    }

    public function getReplyById($replyId, $userId)
    {
        $builder = $this->db->table('replies');
        $builder->select('replies.*, fullname , email');
        $builder->Where(['replies.id' => $replyId, 'user_id' => $userId]);
        $builder->join('users', 'replies.user_id = users.id', 'left')
            ->orderBy('replies.created_at', 'asc');
        $data = $builder->get()->getResult();
        if (!$data) return $this->failNotFound('Not Found');
        $response = [
            'status' => 200,
            'message' =>  'success',
            'data' => $data
        ];
        return $this->respond($response);
    }

    public function getRepliesByQuestion($questionId)
    {

        $questionbuilder = $this->db->table('questions');
        $questionbuilder->select('questions.* , users.full_name');
        $questionbuilder->Where(['questions.id' => $questionId]);
        $questionbuilder->join('users', 'users.id = questions.user_id', 'left');
        $question = $questionbuilder->get()->getResult();


        $builder = $this->db->table('replies');
        $builder->select('replies.* , users.full_name');
        $builder->Where(['replies.question_id' => $questionId]);
        $builder->join('questions', 'replies.question_id = questions.id');
        $builder->join('users', 'replies.user_id = users.id', 'right')
            ->orderBy('replies.created_at', 'asc');
        $replies = $builder->get()->getResult();


        $question = array_values($question);
        $question = (array)($question[0]);
        $question['replies'] = $replies;


        $response = [
            'status' => 200,
            'message' =>  'success',
            'question' => $question,
        ];

        return $this->respond($response);
    }
}
