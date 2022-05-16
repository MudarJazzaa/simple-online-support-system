<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateQuestionTable extends Migration
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
            'title' => [
                'type' => 'VARCHAR', 'constraint' => 255
            ],
            'description' => [
                'type' => 'TEXT',
            ],
            'status' => [
                'type' => 'VARCHAR', 'constraint' => 100, 'default' => 'in progress'
            ],
            'user_id' => [
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
        $this->forge->addForeignKey('user_id', 'users', 'id');
        $this->forge->createTable('questions', true);
    }

    public function down()
    {
        $this->forge->dropTable('questions', true);
    }
}
