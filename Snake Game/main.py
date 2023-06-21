import pygame
import time
import random

# Screen dimensions
screen_width = 800
screen_height = 600

# Snake block size
snake_block_size = 20

# Colors (RGB format)
white = (255, 255, 255)
black = (0, 0, 0)
green = (0, 255, 0)
red = (255, 0, 0)

pygame.init()

# Create the screen
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Snake Game')

game_over = False

# Snake's starting position and movement direction
x = screen_width / 2
y = screen_height / 2
x_movement = 0
y_movement = 0

# Snake's body
snake_body = []
snake_length = 1

# Create the food
food_x = round(random.randrange(0, screen_width - snake_block_size) / snake_block_size) * snake_block_size
food_y = round(random.randrange(0, screen_height - snake_block_size) / snake_block_size) * snake_block_size

# Game speed
clock = pygame.time.Clock()
game_speed = 15

# Function to grow the snake
def grow_snake(snake_body):
    for segment in snake_body:
        pygame.draw.rect(screen, green, [segment[0], segment[1], snake_block_size, snake_block_size])

# Game loop
while not game_over:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                x_movement = -snake_block_size
                y_movement = 0
            elif event.key == pygame.K_RIGHT:
                x_movement = snake_block_size
                y_movement = 0
            elif event.key == pygame.K_UP:
                y_movement = -snake_block_size
                x_movement = 0
            elif event.key == pygame.K_DOWN:
                y_movement = snake_block_size
                x_movement = 0

    if x >= screen_width or x < 0 or y >= screen_height or y < 0:
        game_over = True

    x += x_movement
    y += y_movement
    screen.fill(black)
    pygame.draw.rect(screen, red, [food_x, food_y, snake_block_size, snake_block_size])

    snake_head = []
    snake_head.append(x)
    snake_head.append(y)
    snake_body.append(snake_head)

    if len(snake_body) > snake_length:
        del snake_body[0]

    for segment in snake_body[:-1]:
        if segment == snake_head:
            game_over = True

    grow_snake(snake_body)

    pygame.display.update()

    if x == food_x and y == food_y:
        food_x = round(random.randrange(0, screen_width - snake_block_size) / snake_block_size) * snake_block_size
        food_y = round(random.randrange(0, screen_height - snake_block_size) / snake_block_size) * snake_block_size
        snake_length += 1

    clock.tick(game_speed)

pygame.quit()
