python run_summarization.py  ^
--model_name_or_path facebook/bart-base ^
--dataset_name cnn_dailymail ^
--dataset_config "3.0.0" ^
--output_dir /tmp/tst-summarization  ^
--per_device_train_batch_size 4 ^
--per_device_eval_batch_size 16 ^
--num_train_epochs 3 ^
--do_train ^
--do_eval

