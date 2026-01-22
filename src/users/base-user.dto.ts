import { ApiProperty } from "@nestjs/swagger";

export class BaseUserDto {
    @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
    id: number;
    
    @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
    username: string;

    @ApiProperty({ example: 'strongPassword123', description: 'The password of the user' })
    password: string;
}