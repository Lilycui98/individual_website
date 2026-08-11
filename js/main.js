/* ========================================
   main.js - 主逻辑文件
   ========================================
   功能：
   1. 动态渲染作品到页面
   2. 处理导航切换
   3. 图片灯箱查看
   4. 移动端菜单
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    // ========================================
    // 1. 初始化：渲染所有作品
    // ========================================
    renderArtworks();
    updateSiteInfo();

    // ========================================
    // 2. 导航切换逻辑
    // ========================================
    initNavigation();

    // ========================================
    // 3. 图片灯箱
    // ========================================
    initLightbox();

    // ========================================
    // 4. 移动端菜单
    // ========================================
    initMobileMenu();
});


// ========================================
// 渲染作品到对应区域
// ========================================
function renderArtworks() {
    const grid = document.getElementById('all-grid');
    if (!grid) return;

    // 合并所有分类
    const allArtworks = [
        ...(PortfolioData.home || []),
        ...(PortfolioData.projects || []),
        ...(PortfolioData.editorial || []),
        ...(PortfolioData.personal || [])
    ];

    const fragment = document.createDocumentFragment();
    allArtworks.forEach((art, index) => {
        const el = createArtElement(art, 'all', index);
        fragment.appendChild(el);
    });
    grid.appendChild(fragment);
}

// 创建单个作品元素
function createArtElement(art, section, index) {
    const div = document.createElement('div');
    div.className = 'art-item';
    div.setAttribute('data-size', art.size || 'medium');
    div.setAttribute('data-category', section);
    div.setAttribute('data-index', index);
    
    div.innerHTML = `
        <div class="art-image-wrapper">
            <img src="${art.image}" 
                 alt="${art.title}" 
                 class="art-image"
                 loading="lazy"
                 onerror="handleImageError(this)">
            <div class="art-overlay">
                <div class="art-overlay-text">点击查看大图</div>
            </div>
        </div>
        <div class="art-info">
            <div class="art-title">${art.title}</div>
            ${art.description ? `<div class="art-description">${art.description}</div>` : ''}
        </div>
    `;
    
    // 点击打开灯箱
    div.addEventListener('click', function () {
        openLightbox(section, index);
    });
    
    return div;
}

// 图片加载失败时的处理
function handleImageError(img) {
    // 显示占位符
    img.style.display = 'none';
    const wrapper = img.parentElement;
    if (!wrapper.querySelector('.placeholder')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder';
        placeholder.style.cssText = `
            width: 100%;
            aspect-ratio: 3/4;
            background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
            font-size: 14px;
        `;
        placeholder.textContent = '图片未找到';
        wrapper.appendChild(placeholder);
    }
}


// ========================================
// 导航切换（两级：作品/关于我 + 子分类标签）
// ========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');

            // 切换左侧高亮
            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');

            // 切换右侧内容区
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}


// ========================================
// 图片灯箱
// ========================================
let lightboxData = [];
let lightboxIndex = 0;

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    // 关闭灯箱
    closeBtn.addEventListener('click', closeLightbox);
    
    // 上一张/下一张
    prevBtn.addEventListener('click', function () {
        navigateLightbox(-1);
    });
    
    nextBtn.addEventListener('click', function () {
        navigateLightbox(1);
    });
    
    // 点击背景关闭
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // 键盘支持
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(category, index) {
    const artworks = [
        ...(PortfolioData.home || []),
        ...(PortfolioData.projects || []),
        ...(PortfolioData.editorial || []),
        ...(PortfolioData.personal || [])
    ];
    
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    img.src = artworks[index].image;
    caption.textContent = artworks[index].title;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    lightboxIndex += direction;
    
    // 循环
    if (lightboxIndex < 0) {
        lightboxIndex = lightboxData.length - 1;
    } else if (lightboxIndex >= lightboxData.length) {
        lightboxIndex = 0;
    }
    
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    // 添加淡入效果
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = lightboxData[lightboxIndex].image;
        caption.textContent = lightboxData[lightboxIndex].title;
        img.style.opacity = '1';
    }, 150);
}

// 灯箱图片过渡效果
document.addEventListener('DOMContentLoaded', function () {
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) {
        lightboxImg.style.transition = 'opacity 0.2s ease';
    }
});


// ========================================
// 移动端菜单
// ========================================
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!menuToggle || !mobileNav) return;

    // 复制主导航到移动端
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) mobileNav.innerHTML = navMenu.innerHTML;

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // 移动端点击导航
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('active');
            const section = this.getAttribute('data-section');

            document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
            document.querySelectorAll(`.nav-link[data-section="${section}"]`).forEach(nl => nl.classList.add('active'));

            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            const target = document.getElementById(section);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}


// ========================================
// 更新站点信息（从配置中读取）
// ========================================
function updateSiteInfo() {
    // 更新名字
    if (SiteConfig.name) {
        document.querySelectorAll('.logo-text, .mobile-logo').forEach(el => {
            el.textContent = SiteConfig.name;
        });
    }
    
    // 更新版权
    if (SiteConfig.copyright) {
        document.querySelectorAll('.copyright').forEach(el => {
            el.textContent = SiteConfig.copyright;
        });
    }
    
    // 更新关于页面
    if (SiteConfig.aboutText && SiteConfig.aboutText.length > 0) {
        const aboutTextContainer = document.querySelector('.about-text');
        if (aboutTextContainer) {
            aboutTextContainer.innerHTML = SiteConfig.aboutText
                .map(text => `<p>${text}</p>`)
                .join('');
            
            if (SiteConfig.email) {
                aboutTextContainer.innerHTML += `<p class="contact-email">${SiteConfig.email}</p>`;
            }
        }
    }
}


// ========================================
// 工具函数：平滑滚动到指定元素
// ========================================
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}