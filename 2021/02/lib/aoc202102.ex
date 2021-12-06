defmodule Aoc202102 do

  # part 1
  def update_position(acc, "forward", distance) do
    List.update_at(acc, 0, &(&1 + distance))
  end

  def update_position(acc, "up", distance) do
    List.update_at(acc, 1, &(&1 + distance))
  end

  def update_position(acc, "down", distance) do
    List.update_at(acc, 1, &(&1 - distance))
  end

  def day_2_part_1(input) do
    [distance, depth] =
      Enum.reduce(input, [0, 0], fn x, acc ->
        [direction, distance] = x
        update_position(acc, direction, String.to_integer(distance))
      end)

    abs(distance) * abs(depth)
  end

  # part 2
  def update_position(acc, "forward", distance, aim) do
    acc
    |> List.update_at(0, &(&1 + distance))
    |> List.update_at(1, &((&1 + (distance * aim))))
  end

  def update_position(acc, "up", distance, _) do
    List.update_at(acc, 2, &(&1 - distance))
  end

  def update_position(acc, "down", distance, _) do
    List.update_at(acc, 2, &(&1 + distance))
  end

  def day_2_part_2(input) do
    [distance, depth, _] =
      # acc = [horitzontal_distance, vertical_distance, aim]
      Enum.reduce(input, [0, 0, 0], fn x, acc ->
        [direction, distance] = x
        update_position(acc, direction, String.to_integer(distance), Enum.at(acc, 2))
      end)
    abs(distance) * abs(depth)
  end
end
