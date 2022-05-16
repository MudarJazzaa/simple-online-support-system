<?php

namespace App\Services;

use CodeIgniter\Config\BaseService;

class UserService extends BaseService
{

  // private $db;

  // public function __construct()
  // {
  //   $this->db = db_connect(); // Loading database
  // }
  // public function getQuestionReplies($questionId)
  // {



  //   $builder = $this->db->table('questions');
  //   // $builder->select('questions.* , users.full_name');
  //   $builder->getWhere(['id' => $questionId]);
  //   $builder->join('users', 'users.id = questions.user_id', 'left');
  //   $question = $builder->get()->getResult();


  //   $builder = $this->db->table('replies');
  //   $builder->select('replies.* , users.full_name');
  //   $builder->getWhere(['replies.question_id' => $questionId]);
  //   $builder->join('questions', 'replies.question_id = questions.id');
  //   $builder->join('users', 'replies.user_id = users.id', 'left')
  //     ->orderBy('replies.created_at', 'asc');
  //   $replies = $builder->get()->getResult();
  //   // if (!$data) return $this->failNotFound('Not Found');
  //   $response = [
  //     'status' => 200,
  //     'message' =>  'success',
  //     'question' => $question,
  //     'replies' => $replies
  //   ];
  //   return $response;
  // }
}
