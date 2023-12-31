плохо скейлятся под картинки больших размеров.
нужно больше параметров.
вычислительная сложность моделей растет квадратично при росте размеров входных данных.

attantion-based модели, возможное решение - модифицировать attention так, чтобы он требовал меньшее количество параметров.


CV модели — будь то CNN, MLP или ViT —  плохо скейлятся под картинки больших размеров. Чем больше разрешение входного изображения, с которым должна работать модель, тем больше параметров ей нужно: вычислительная сложность моделей растет квадратично при росте размеров входных изображений. Их становится сложнее обучать, а время инференса оставляет желать лучшего.

Google придумал простую идею, как бороться с этой проблемой в attention-based CV моделях. Идея — модифицировать attention так, чтобы он требовал меньшее количество параметров. 

В ViT использовался full-size attention: в нем каждый пиксель получает информацию от абсолютно всех остальных пикселей картинки. В Google заменили этот attention композицией двух других: block attention + grid attention = multi-axis attention. Такая замена серьезно уменьшает количество параметров у attention при обработке картинок большого размера, не теряя при этом в качестве. 

Устройство multi-axis attention — на картинке к посту. 
- При block attention картинка разбивается на окна фиксированного размера. Локально внутри каждого окна применяется self-attention. Каждый пиксель окна получает информацию от всех остальных пикселей окна.
- При grid attention картинка разбивается на решетки. Пиксели одного цвета на картинке к посту образуют одну решетку. Локально внутри каждой решетки применяется self-attention. Каждый пиксель решетки получает информацию от всех остальных пикселей этой же решетки.
Блок FFN между двумя attention — это feed-forward neural network. 

Google применил эту идею к ViT и MLP и получил две модели — MaxViT и MAXIM (Multi-Axis MLP for Image Processing). 
- MaxViT берет SOTA на задачах классификации, детекции, сегментации и генерации изображений. Количество параметров при этом в два раза меньше, чем у ближайших конкурентов. 
- MAXIM получает сравнимые с SOTA результаты задачах denoising, deblurring, dehazing, deraining, имея при этом значительно меньше параметров, чем другие модели.
 
Ссылки:
Блогпост Google AI (https://ai.googleblog.com/2022/09/a-multi-axis-approach-for-vision.html)
MaxViT: статья (https://arxiv.org/pdf/2204.01697.pdf), GitHub (https://github.com/google-research/maxvit)
MAXIM: статья (https://openaccess.thecvf.com/content/CVPR2022/papers/Tu_MAXIM_Multi-Axis_MLP_for_Image_Processing_CVPR_2022_paper.pdf), GitHub (https://github.com/google-research/maxim)