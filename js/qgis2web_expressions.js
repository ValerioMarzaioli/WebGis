// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_CNTR_RG_20M_2024_4326gpkg_1rule1_eval_expression(context) {
    // "Autori "  IN ('陳紀瀅 Chen Chih-ying, 艾青 Ai Qing, 阿城 Ah Cheng, 楊鍊 Yang Lian, 朱天心 Chu Tien-hsin, 邓跃华 Deng Yuehua, 紀大偉 Chi Ta-wei', '三毛 Sanmao, 張琴 Zhang Qin, Chenta Tsai 蔡真太', '巴金 Ba Jin , 戴望舒Dai Wangshu , 熊秉明 Hsiung Ping-ming , 程抱一 François Cheng , 黃育順 NG YOK-SOON , 高行健 Gao Xingjian , 呂大明 Daming Lu , *也斯 Yasi/梁秉均Leung Ping-kwan , 戴思傑 Dai Sijie , 鄭寶娟 , 邱妙津 Chiu Miao-chin , 山颯 Shan Sa , 蔡宛璇 Tsai Wan-shuen , 施文英', '徐志摩 Xu Zhimo, 老舍 Lao She, 熊式一 Hsiung Shih-I, 馬建 Ma Jian, 虹影, 郭瑩Guo Ying, 范進傑Kit Fan, Jennifer Wong', '方麗娜 Lina Fang', '李永華／老木, 汪温妮 Yong wangová Bohmová, 欧非子, 刘薇, 劉恆君, 捷克華文作家協會', '林凱瑜 Lin Kai-yu', '林湄 Lin Mei, * 李永平Li Yongping, *陳耀昌 Yao-chang Chen, 丘彥明', '白嗣宏, *哈金 Ha Jin', '章平 Zhang Ping', '趙淑俠Susie Chao, 於心樂, 朱頌瑜', '車慧文 Hui-wen von Groeling- Che , 麥勝梅 Shengmai Mai , 高关中 Guanzhong Gao , 陈玉慧 Jade Y. Chen , 謝盛友You Xie , 黃鶴昇 Huang Hesheng , 阚昱静 Kan Yujing , 穆紫荆 Mu Zijing , 劉瑛 Ying Liu , Luo Lingyuan , 徐沛 Xu Pei , 陳思宏 Kevin Chen ')

    var feature = context.feature;
    
    if (feature.properties) {
        return "'\u9673\u7d00\u7005 Chen Chih-ying, \u827e\u9752 Ai Qing, \u963f\u57ce Ah Cheng, \u694a\u934a Yang Lian, \u6731\u5929\u5fc3 Chu Tien-hsin, \u9093\u8dc3\u534e Deng Yuehua, \u7d00\u5927\u5049 Chi Ta-wei', '\u4e09\u6bdb Sanmao, \u5f35\u7434 Zhang Qin, Chenta Tsai \u8521\u771f\u592a', '\u5df4\u91d1 Ba Jin , \u6234\u671b\u8212Dai Wangshu , \u718a\u79c9\u660e Hsiung Ping-ming , \u7a0b\u62b1\u4e00 Fran\u00e7ois Cheng , \u9ec3\u80b2\u9806 NG YOK-SOON , \u9ad8\u884c\u5065 Gao Xingjian , \u5442\u5927\u660e Daming Lu , *\u4e5f\u65af Yasi/\u6881\u79c9\u5747Leung Ping-kwan , \u6234\u601d\u5091 Dai Sijie , \u912d\u5bf6\u5a1f , \u90b1\u5999\u6d25 Chiu Miao-chin , \u5c71\u98af Shan Sa , \u8521\u5b9b\u7487 Tsai Wan-shuen , \u65bd\u6587\u82f1', '\u5f90\u5fd7\u6469 Xu Zhimo, \u8001\u820d Lao She, \u718a\u5f0f\u4e00 Hsiung Shih-I, \u99ac\u5efa Ma Jian, \u8679\u5f71, \u90ed\u7469Guo Ying, \u8303\u9032\u5091Kit Fan, Jennifer Wong', '\u65b9\u9e97\u5a1c Lina Fang', '\u674e\u6c38\u83ef\uff0f\u8001\u6728, \u6c6a\u6e29\u59ae Yong wangov\u00e1 Bohmov\u00e1, \u6b27\u975e\u5b50, \u5218\u8587, \u5289\u6046\u541b, \u6377\u514b\u83ef\u6587\u4f5c\u5bb6\u5354\u6703', '\u6797\u51f1\u745c Lin Kai-yu', '\u6797\u6e44 Lin Mei, * \u674e\u6c38\u5e73Li Yongping, *\u9673\u8000\u660c Yao-chang Chen, \u4e18\u5f65\u660e', '\u767d\u55e3\u5b8f, *\u54c8\u91d1 Ha Jin', '\u7ae0\u5e73 Zhang Ping', '\u8d99\u6dd1\u4fe0Susie Chao, \u65bc\u5fc3\u6a02, \u6731\u980c\u745c', '\u8eca\u6167\u6587 Hui-wen von Groeling- Che , \u9ea5\u52dd\u6885 Shengmai Mai , \u9ad8\u5173\u4e2d Guanzhong Gao , \u9648\u7389\u6167 Jade Y. Chen , \u8b1d\u76db\u53cbYou Xie , \u9ec3\u9db4\u6607 Huang Hesheng , \u961a\u6631\u9759 Kan Yujing , \u7a46\u7d2b\u8346 Mu Zijing , \u5289\u745b Ying Liu , Luo Lingyuan , \u5f90\u6c9b Xu Pei , \u9673\u601d\u5b8f Kevin Chen '".indexOf(feature.properties['Autori '] ) > -1 ;
    } else {
        return "'\u9673\u7d00\u7005 Chen Chih-ying, \u827e\u9752 Ai Qing, \u963f\u57ce Ah Cheng, \u694a\u934a Yang Lian, \u6731\u5929\u5fc3 Chu Tien-hsin, \u9093\u8dc3\u534e Deng Yuehua, \u7d00\u5927\u5049 Chi Ta-wei', '\u4e09\u6bdb Sanmao, \u5f35\u7434 Zhang Qin, Chenta Tsai \u8521\u771f\u592a', '\u5df4\u91d1 Ba Jin , \u6234\u671b\u8212Dai Wangshu , \u718a\u79c9\u660e Hsiung Ping-ming , \u7a0b\u62b1\u4e00 Fran\u00e7ois Cheng , \u9ec3\u80b2\u9806 NG YOK-SOON , \u9ad8\u884c\u5065 Gao Xingjian , \u5442\u5927\u660e Daming Lu , *\u4e5f\u65af Yasi/\u6881\u79c9\u5747Leung Ping-kwan , \u6234\u601d\u5091 Dai Sijie , \u912d\u5bf6\u5a1f , \u90b1\u5999\u6d25 Chiu Miao-chin , \u5c71\u98af Shan Sa , \u8521\u5b9b\u7487 Tsai Wan-shuen , \u65bd\u6587\u82f1', '\u5f90\u5fd7\u6469 Xu Zhimo, \u8001\u820d Lao She, \u718a\u5f0f\u4e00 Hsiung Shih-I, \u99ac\u5efa Ma Jian, \u8679\u5f71, \u90ed\u7469Guo Ying, \u8303\u9032\u5091Kit Fan, Jennifer Wong', '\u65b9\u9e97\u5a1c Lina Fang', '\u674e\u6c38\u83ef\uff0f\u8001\u6728, \u6c6a\u6e29\u59ae Yong wangov\u00e1 Bohmov\u00e1, \u6b27\u975e\u5b50, \u5218\u8587, \u5289\u6046\u541b, \u6377\u514b\u83ef\u6587\u4f5c\u5bb6\u5354\u6703', '\u6797\u51f1\u745c Lin Kai-yu', '\u6797\u6e44 Lin Mei, * \u674e\u6c38\u5e73Li Yongping, *\u9673\u8000\u660c Yao-chang Chen, \u4e18\u5f65\u660e', '\u767d\u55e3\u5b8f, *\u54c8\u91d1 Ha Jin', '\u7ae0\u5e73 Zhang Ping', '\u8d99\u6dd1\u4fe0Susie Chao, \u65bc\u5fc3\u6a02, \u6731\u980c\u745c', '\u8eca\u6167\u6587 Hui-wen von Groeling- Che , \u9ea5\u52dd\u6885 Shengmai Mai , \u9ad8\u5173\u4e2d Guanzhong Gao , \u9648\u7389\u6167 Jade Y. Chen , \u8b1d\u76db\u53cbYou Xie , \u9ec3\u9db4\u6607 Huang Hesheng , \u961a\u6631\u9759 Kan Yujing , \u7a46\u7d2b\u8346 Mu Zijing , \u5289\u745b Ying Liu , Luo Lingyuan , \u5f90\u6c9b Xu Pei , \u9673\u601d\u5b8f Kevin Chen '".indexOf(feature['Autori '] ) > -1 ;
    }
}