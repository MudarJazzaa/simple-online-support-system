<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateReplyTable extends Migration
{
    public function up()
    {
        $fields = [
            'id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'text' => [
                'type' => 'TEXT',
            ],
            'user_id' => [
                'type' => 'BIGINT',
                'unsigned' => true,
            ],
            'question_id' => [
                'type' => 'BIGINT',
                'unsigned' => true,
            ],
            'created_at' => [
                'type' => 'TIMESTAMP'
            ],
            'updated_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
            ]

        ];


        $this->forge->addKey('id', true);
        $this->forge->addField($fields);
        $this->forge->addForeignKey('question_id', 'questions', 'id');
        $this->forge->addForeignKey('user_id', 'users', 'id');
        $this->forge->createTable('replies', true);
    }

    public function down()
    {
        $this->forge->dropTable('replies', true);
    }
}
