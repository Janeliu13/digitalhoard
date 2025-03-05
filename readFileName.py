import os
import re

def clean_filename(filename):
    # 删除乱码字符：匹配所有非 ASCII 字符并删除
    # filename = re.sub(r'[^\x00-\x7F]+', '', filename)
    
    # 替换空格和@符号为下划线
    filename = filename.replace(" ", "_").replace("@", "_").replace("#", "_")
    
    return filename

def organize_files_by_extension(directory_path):
    # 初始化存储不同类型文件的数组
    jpg_files = []
    png_files = []
    gif_files = []
    other_files = []

    # 获取指定文件夹下的所有文件
    for filename in os.listdir(directory_path):
        # 获取文件的完整路径
        file_path = os.path.join(directory_path, filename)

        # 仅处理文件而非文件夹
        if os.path.isfile(file_path):
            # 清理文件名
            cleaned_filename = clean_filename(filename)
            
            # 重命名文件
            if cleaned_filename != filename:
                os.rename(file_path, os.path.join(directory_path, cleaned_filename))
                filename = cleaned_filename  # 更新文件名

            # 获取文件扩展名（小写）
            file_extension = filename.split('.')[-1].lower()

            # 根据文件扩展名将文件名添加到相应的数组
            if file_extension == 'jpg' or file_extension == 'png' or file_extension == 'gif':
                jpg_files.append(filename)           
            else:
                other_files.append(filename)

    return jpg_files, png_files, gif_files, other_files


def save_to_txt(jpg_files, png_files, gif_files, other_files, output_path):
    with open(output_path, 'w',encoding='utf-8') as f:
        # 写入每个类型的文件名到文本文件，以数组格式存储
        f.write(f'JPG Files: {str(jpg_files)}\n')
        f.write(f'PNG Files: {str(png_files)}\n')
        f.write(f'GIF Files: {str(gif_files)}\n')
        f.write(f'Other Files: {str(other_files)}\n')


def main():
    # 设置文件夹路径和输出文件路径
    directory_path = 'digitalhoard/digital hoard (edited)'  # 更改为目标文件夹路径
    output_path = 'output_files.txt'  # 输出结果的文本文件路径

    # 组织文件
    jpg_files, png_files, gif_files, other_files = organize_files_by_extension(directory_path)

    # 将文件名保存到文本文件
    save_to_txt(jpg_files, png_files, gif_files, other_files, output_path)

    print(f"文件已保存至 {output_path}")


if __name__ == "__main__":
    main()
